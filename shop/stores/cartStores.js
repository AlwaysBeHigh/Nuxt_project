export const useCartStore = defineStore(
    'cart',
    () => {

        const cart = ref([])

        const totalCartProducts = computed(() => {
            return cart.value.reduce((val, product) => val + product?.quantity, 0).toFixed(0)
        })

        const productQuantity = computed(() => {
            return (productId) => {
                const item = cart.value.find((item) => item.id === productId)
                return item?.quantity
            }
        })

        const productAmount = computed(() => {
            return (productId) => {
                const item = cart.value.find((item) => item.id === productId)
                return (item.price * item?.quantity).toFixed(2)
            }
        })

        const totalProductsPrice = computed(() => {
            return cart.value.reduce((val, product) => val + product.price * product?.quantity, 0).toFixed(2)
        })

        function addProductToCart(product) {
            const item = cart.value.find((item) => item.id === product.id)
            if (item) {
                if (item.quantity) {
                    return item.quantity++
                }
            } else {
                cart.value.push({...product, quantity: 1})
            }
        }

        function removeProductFromCart(productId) {

            const item = cart.value.find((item) => item.id === productId);

            if (item) {
                if (item.quantity && item.quantity > 1) {
                    return item.quantity--
                } else {
                    cart.value = cart.value.filter((item) => item.id !== productId)
                }
            }
        }

        return {
            cart,
            productAmount,
            totalCartProducts,
            productQuantity,
            totalProductsPrice,
            addProductToCart,
            removeProductFromCart
        }
    },
    {
        persist: {
            storage: persistedState.localStorage,
        },
    })