import Swal from "sweetalert2";

const getStoredBooks = () => {
    const storedBook = localStorage.getItem("readList");

    if (storedBook) {
        const storedData = JSON.parse(storedBook)
        return storedData
    }
    else {
        return [];
    }
}
const addStoredBooks = (id) => {
    const storedCollection = getStoredBooks();

    if (storedCollection.includes(id)) {
        Swal.fire("The book is already exist");

    }
    else {
        storedCollection.push(id)
        const setBook = JSON.stringify(storedCollection);
        localStorage.setItem("readList", setBook)
    }
}

export { addStoredBooks, getStoredBooks };