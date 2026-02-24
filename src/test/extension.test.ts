import * as assert from 'assert';

import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	async function setContent(editor: vscode.TextEditor, content: string): Promise<void> {
		const doc = editor.document;
		const all = new vscode.Range(
			doc.positionAt(0),
			doc.positionAt(doc.getText().length),
		);

		await editor.edit((eb) => eb.replace(all, content));
	}

	function delay(milliseconds: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	}

	test('Sample test', async () => {
		const doc = await vscode.workspace.openTextDocument({ content: "" });
		const editor = await vscode.window.showTextDocument(doc);

		await setContent(editor, "\nfoo() {\n  // print('foo');\n}\n\nbar() {\n  // print('bar');\n}\n\t\t// 1 \n// 1 \n// 1 \n");
		await delay(1000);
		await setContent(editor, "0123456789");
	});
});
