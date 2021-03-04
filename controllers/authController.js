exports.SignIn = async (req, res) => {
    try {
       await res.json('Hello from sign in!!!')
    } catch (error) {
        res.status(500).json(error)
    }
}