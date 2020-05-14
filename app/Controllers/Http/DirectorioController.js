'use strict'

const Directorio = use('App/Models/Directorio')
const { validate } = use('Validator')

class DirectorioController {
  async index ({ request, response }) {
    const input = await request.all();
    if(Object.keys(input).length > 0){
      return await Directorio.query()
                              .where('telefono', input.txtBuscar)
                              .orWhere('nombre_completo', 'like', '%' + input.txtBuscar + '%')
                              .fetch();
                ;
    }
    else{
      return await Directorio.all();
    }    
  }

  async store ({ request, response }) {
    //validar
    const validation = await validate(request.all(), {
        nombre_completo: 'required|min:3|max:100',
        telefono: 'required|unique:directorios,telefono'
    });

    if (validation.fails()) {
      return validation.messages()
    }

    const directorio = await Directorio.create(request.all());
    return {
      res: true,
      directorio: directorio,
      message: "Registro insertado correctamente"
    }
  }

  async show ({ params, request, response }) {
    return await Directorio.findOrFail(params.id);
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = DirectorioController