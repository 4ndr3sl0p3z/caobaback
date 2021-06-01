export const responseTransaction = (res, data) => {
    if(data.success){
        res.status(200).json(data)
    }
    else{
        if(data.statusCode === 400){
            res.status(400).json(data)
        }
        else if(data.statusCode === 204){
            res.status(204).json(data)
        }
        else if(data.statusCode === 401){
            res.status(401).json(data)
        }
    }
}
