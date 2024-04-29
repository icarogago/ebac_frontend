$(document).ready(function(){
   $('#cpf').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(DD) 12345-1234'
    })

    $('#cep').mask('00000-000', {
        placeholder:'00000-000'
    })

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required: true
            },
            cpf: {
                required:true
            },
            veiculoDeInteresse: {
                required:false
            }
        }, 
        messages:{
            nome:'Por favor, insira seu nome',
            email:'Por favor, insira seu email',
            telefone:'Por favor, insira seu telefone',
            cpf:'Por favor, insira seu cpf',
        }

    })
})
