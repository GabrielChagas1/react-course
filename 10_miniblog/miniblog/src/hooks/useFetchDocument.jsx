import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";


export const useFetchDocument = (docColletion, uid) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {

    async function loadDocument(){
      if(cancelled) return

      setLoading(true)
      try {
        const docRef = await doc(db, docColletion, uid)
        const docSnap = await getDoc(docRef)
        setDocument(docSnap.data())
        setLoading(false)
      } catch (error) {
        console.log(error)
          setError(error.message)
          setLoading(false)
      }

      
    }
    loadDocument()

  }, [docColletion, uid, cancelled])

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { document, loading, error }

}