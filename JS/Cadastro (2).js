

  const form = document.getElementById("formCadastro");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!nome || !email || !senha) {
      alert("⚠️ Preencha Nome, E-mail e Senha para continuar.");
      return;
    }

    console.log("✅ Usuário cadastrado:");
    console.log("👤 Nome:", nome);
    console.log("📧 Email:", email);
    console.log("🔒 Senha:", senha);

    alert("🎉 Cadastro realizado com sucesso!");
    window.location.href = "index.html";
    form.reset();
  });
