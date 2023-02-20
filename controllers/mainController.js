//imports ----------------------------------------------------->

//Exports ---------------------------------------------------->
exports.get = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Hello World",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
};
