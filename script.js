const avanca = document.querySelectorAll(" .btn-proximo")

avanca.forEach(button => {
    button.addEventListener("click , function"(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAttribute('data proximo')

        atual,clashList.remove('ativo')
        document.getElementById(proximoPasso).clashList.add('ativo'); 
    }
    )
}
    )