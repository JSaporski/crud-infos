var linhaSelecionada = null;

function envioFormulario() {
  if (validacao()) {
    var formulario = dadosDoFormulario();
    if (linhaSelecionada == null) novoRegistro(formulario);
    else atualizarRegistro(formulario);
    redefinirFormulario();
  }
}

function dadosDoFormulario() {
  var formulario = {};
  formulario["PrimeiroNome"] = document.getElementById("PrimeiroNome").value;
  formulario["sobreNome"] = document.getElementById("sobreNome").value;
  formulario["idade"] = document.getElementById("idade").value;
  formulario["dataDeNascimento"] = document.getElementById(
    "dataDeNascimento",
  ).value;
  formulario["telefone"] = document.getElementById("telefone").value;
  formulario["cidade"] = document.getElementById("cidade").value;
  return formulario;
}

function novoRegistro(data) {
  var table = document
    .getElementById("crudUsuario")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.PrimeiroNome;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.sobreNome;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.idade;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.dataDeNascimento;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.telefone;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.cidade;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = `<a onClick="editar(this)">Edit</a>
                       <a onClick="deletar(this)">Delete</a>`;
}

function redefinirFormulario() {
  document.getElementById("PrimeiroNome").value = "";
  document.getElementById("sobreNome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("dataDeNascimento").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("cidade").value = "";
  linhaSelecionada = null;
}

function editar(td) {
  linhaSelecionada = td.parentElement.parentElement;
  document.getElementById("PrimeiroNome").value =
    linhaSelecionada.cells[0].innerHTML;
  document.getElementById("sobreNome").value =
    linhaSelecionada.cells[1].innerHTML;
  document.getElementById("idade").value = linhaSelecionada.cells[2].innerHTML;
  document.getElementById("dataDeNascimento").value =
    linhaSelecionada.cells[3].innerHTML;
  document.getElementById("telefone").value =
    linhaSelecionada.cells[4].innerHTML;
  document.getElementById("cidade").value = linhaSelecionada.cells[5].innerHTML;
}

function atualizarRegistro(formulario) {
  linhaSelecionada.cells[0].innerHTML = formulario.PrimeiroNome;
  linhaSelecionada.cells[1].innerHTML = formulario.sobreNome;
  linhaSelecionada.cells[2].innerHTML = formulario.idade;
  linhaSelecionada.cells[3].innerHTML = formulario.dataDeNascimento;
  linhaSelecionada.cells[4].innerHTML = formulario.telefone;
  linhaSelecionada.cells[5].innerHTML = formulario.cidade;
}

function deletar(td) {
  if (confirm("Tem certeza que deseja apagar esse registro ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("crudUsuario").deleteRow(row.rowIndex);
    redefinirFormulario();
  }
}
function validacao() {
  isValid = true;
  if (document.getElementById("PrimeiroNome").value == "") {
    isValid = false;
    document.getElementById("ValidandoPrimeiroNome").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("ValidandoPrimeiroNome")
        .classList.contains("hide")
    )
      document.getElementById("ValidandoPrimeiroNome").classList.add("hide");
  }
  return isValid;
}
