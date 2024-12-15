export const executeCode = async (language, code) => {
    if (language === "javascript") {
      try {
        const logs = [];
        const originalConsoleLog = console.log;
        console.log = (...args) => {
          logs.push(args.join(" "));
          originalConsoleLog(...args);
        };
  
        const evalResult = new Function(code)();
  
        console.log = originalConsoleLog;
  
        return {
          status: "success",
          output: logs.length > 0 ? logs.join("\n") : evalResult || "Executed!",
        };
      } catch (error) {
        return {
          status: "error",
          error: error.message,
        };
      }
    } else if (language === "php") {
      try {
        const response = await fetch("http://localhost:5000/execute.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to execute PHP code");
        }
  
        const data = await response.json();
        return data; 
      } catch (error) {
        return {
          status: "error",
          error: error.message,
        };
      }
    } else {
      return {
        status: "error",
        error: "Unsupported language.",
      };
    }
  };