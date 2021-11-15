import RajaOngkir from 'rajaongkir-nodejs';

export const getProvinces = async (req, res) => {
    try {
        const response = await RajaOngkir.Starter(process.env.RAJAONGKIR_KEY).getProvinces();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getCities = async (req, res) => {
    try {
        const response = await RajaOngkir.Starter(process.env.RAJAONGKIR_KEY).getCities();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getJNECost = async (req, res) => {
    const payload = req.body;
    try {
        console.log(payload);
        const response = await RajaOngkir.Starter(process.env.RAJAONGKIR_KEY).getJNECost(payload);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};
