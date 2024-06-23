menu = "0- Finaliza o código\n1- Adicionar dados\n2- Listar os dados\n3- Alterar o curso de um aluno\n4- Excluir um aluno"
program = True
lst_cursos_disponiveis = ["RDS", "ADS", "PMM", "DADOS", "SPI"]
lst_aluno = []
lst_idade = []
lst_curso = []

while program:
    print(menu)
    escolha = input("Escolha: ")

    if escolha == "0":
        program = False
        print("Programa foi encerrado")
        break
    elif escolha == "1":
        nome = input("Nome do aluno: ")
        idade = int(input("Idade do aluno: "))
        if idade < 16:
            print("Idade mínima aceita é 16 anos.\nEstamos encerrando este cadastro")
            continue
        print("Cursos disponíveis: ", lst_cursos_disponiveis)
        curso = input("Digite o curso do aluno: ")
        if curso not in lst_cursos_disponiveis:
            print("Curso inválido.\nEstamos encerrando este cadastro")
            continue
        lst_aluno.append(nome)
        lst_idade.append(idade)
        lst_curso.append(curso)
        print("Dados adicionados com sucesso.")
    elif escolha == "2":
        if not lst_aluno:
            print("Nenhum dado cadastrado.")
        else:
            count_18_25 = 0
            for i in range(len(lst_aluno)):
                print(f"Nome: {lst_aluno[i]}, Idade: {lst_idade[i]}, Curso: {lst_curso[i]}")
                if 18 <= lst_idade[i] <= 25:
                    count_18_25 += 1
            print(f"Total de alunos: {len(lst_aluno)}")
            print(f"Alunos na faixa etária entre 18 e 25 anos: {count_18_25}")
    elif escolha == "3":
        nome = input("Digite o nome do aluno para alterar o curso: ")
        if nome in lst_aluno:
            idx = lst_aluno.index(nome)
            print("Cursos disponíveis: ", lst_cursos_disponiveis)
            novo_curso = input("Digite o novo curso: ")
            if novo_curso in lst_cursos_disponiveis:
                lst_curso[idx] = novo_curso
                print("Curso alterado com sucesso.")
            else:
                print("Curso inválido.")
        else:
            print("Aluno não encontrado.")
    elif escolha == "4":
        nome = input("Digite o nome do aluno para excluir: ")
        if nome in lst_aluno:
            idx = lst_aluno.index(nome)
            lst_aluno.pop(idx)
            lst_idade.pop(idx)
            lst_curso.pop(idx)
            print("Aluno excluído com sucesso.")
        else:
            print("Aluno não encontrado.")
    else:
        print("Opção inválida. Tente novamente.")
