import userModel from "../model/model.js";


export const getCorreo = async (req, res) => {
  try {
    // Obtén el correo desde el cuerpo de la solicitud (puedes usar req.params si lo prefieres)
    const { correo } = req.query;

    // Verifica si se envió el correo
    if (!correo) {
      return res.status(400).json({ message: 'El correo es obligatorio' });
    }

    // Buscar el correo en la base de datos
    const usuario = await userModel.findOne({
      where: {
        correo: correo,
      },
    });

    // Si el correo existe
    if (usuario) {
      return res.status(200).json({ message: 'El correo ya está registrado' });
    }

    // Si el correo no existe
    return res.status(404).json({ message: 'El correo no está registrado' });
  } catch (error) {
    console.error('Error al verificar el correo:', error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};
