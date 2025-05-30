import { collection, onSnapshot, orderBy, query, QuerySnapshot, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";


export const useFetchDocuments = (docColletion, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {

    async function loadData(){
      if(cancelled) return

      setLoading(true)
      const collectionRef = await collection(db, docColletion)

      try {
        let q;
        if(search){
          q = await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc"))
        }else if(uid) {
          q = await query(collectionRef, where("uid", "==", uid), orderBy("createdAt", "desc"))
        }else {
          q = await query(collectionRef, orderBy("createdAt", "desc"))
        }
        await onSnapshot(q, (QuerySnapshot) => {
          setDocuments(
            QuerySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
          )
        })
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError(error.message)
        setLoading(false)
      }
    }
    loadData()

  }, [docColletion, search, uid, cancelled])

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { documents, loading, error }

}