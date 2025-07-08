<script>
  let length = 10;
  let includeSymbols = true;
  let includeUppercase = true;
  let includeLowercase = true;
  let includeNumbers = true;
  let multiplePasswords = false;
  let passwords = [];

  function generatePassword() {
    const symbols = "!@#$&";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";

    let chars = "";
    if (includeSymbols) chars += symbols;
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;

    if (!chars) return;

    function generate() {
        let password = "";
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }

    passwords = multiplePasswords ? Array.from({ length: 6 }, generate) : [generate()];
}


  function copyPassword(password) {
    navigator.clipboard.writeText(password);
    alert("Senha copiada!");
  }
</script>

<div class="container">
  <h1>Gerador de Senhas</h1>

  <label>
    <strong>Tamanho da Senha:</strong> {length}
    <input type="range" min="4" max="16" bind:value={length} />
  </label>

  <div class="options">
    <label><input type="checkbox" bind:checked={includeUppercase} /> Letras Maiúsculas</label>
    <label><input type="checkbox" bind:checked={includeLowercase} /> Letras Minúsculas</label>
    <label><input type="checkbox" bind:checked={includeNumbers} /> Números</label>
    <label><input type="checkbox" bind:checked={includeSymbols} /> Símbolos</label>
  </div>

  <label class="multi-option">
    <input type="checkbox" bind:checked={multiplePasswords} />
    Gerar várias senhas
  </label>

  <button class="generate-btn" on:click={generatePassword}>Gerar Senha</button>

  {#if passwords.length > 0}
    <div class="output">
      {#each passwords as password}
        <div class="password-container">
          <p class="password">{password}</p>
          <button class="copy-btn" on:click={() => copyPassword(password)}>Copiar</button>
        </div>
      {/each}
    </div>
  {/if}
  </div>

<style>
  .container {
    max-width: 650px;
    margin: auto;
    padding: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, #2ca3b8 0%, #a1d2f3 100%);
    border-radius: 8px;
    box-shadow: 0px 7px 2px #a4dce5;
  }

  h1 {
    font-size: 29px;
    color: #000000;
    font-weight: bolder;
  }

  label {
    display: block;
    margin: 10px 0;
    font-size: 14px;
  }

  input[type="range"] {
    width: 100%;
    margin-top: 5px;
  }


  .options {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 10px 0;
    font-weight: bolder;
  }

  .multi-option {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-weight: bolder;
  }

  .generate-btn {
    margin-top: 10px;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    background: #134274;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
  }

  .generate-btn:hover {
    background: #0056b3;
    font-weight: bolder;
    border-radius: 50px;
  }

  .output {
    margin-top: 15px;
    padding: 10px;
    background: #9de3f0;
    border-radius: 40px;
    text-align: left;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .password-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #edf6fc;
    padding: 8px;
    border-radius: 50px;
    box-shadow: 0px 5px 3px #134274;
    margin-bottom: 5px;
    color: rgb(0, 0, 0);
  }

  .password {
    font-family: monospace;
    font-size: 14px;
    margin: 0;
    flex-grow: 1;
    padding: 5px;
  }

  .copy-btn {
    background: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;
  }

  .copy-btn:hover {
    background: #218838;
  }
</style>
