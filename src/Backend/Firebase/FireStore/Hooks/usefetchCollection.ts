

async function usefetchCollection<T extends Record<string, unknown>>(collectionName: string): Promise<T[]> {
    const { firestore } = await import('@Backend/Firebase/firebase.config');
    const { getDocs, collection } = await import('firebase/firestore');
    const snapshot = await getDocs(collection(firestore, collectionName));
    const Collection = snapshot.docs.map((doc) => {
        const data = doc.data() as T
        return { ...data, ID: doc.id } as T
    }); 
    return Collection;
}
export default usefetchCollection