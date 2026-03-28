import Swal from "sweetalert2";

const getWishList = () => {
    const wishList = localStorage.getItem("wishList");
    if (wishList) {
        const storedWishList = JSON.parse(wishList)
        return storedWishList;
    }
    else {
        return [];
    }
}

const setWishLIst = id => {
    const storedWishList = getWishList();

    if (storedWishList.includes(id)) {
        Swal.fire("Already added")
    }
    else {
        storedWishList.push(id)
        const setList = JSON.stringify(storedWishList);
        localStorage.setItem("wishList", setList)
    }
}

export { setWishLIst };