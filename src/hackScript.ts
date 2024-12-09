import { NS, ScriptArg } from "@ns";

export async function main(ns: NS): Promise<void> {
  /** first arg should be the name of the server to be hacked */
  const getServerName = (args: ScriptArg[]): string => {
    if (!args[0]) {
      ns.alert("Please provide an args[0] for example: 'n00dles'");
      ns.exit();
    }

    return args[0] as string;
  };

  const { hack } = ns;

  const name = getServerName(ns.args);

  hack(name);
}
