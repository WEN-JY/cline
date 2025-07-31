/*
 * @Description:
 * @version: 0.0.1
 * @Company: alibaba.com
 * @Author: 执无
 * @Date: 2025-05-26 13:48:46
 * @LastEditors: 执无
 * @LastEditTime: 2025-07-30 18:25:55
 */
// import { SVGProps } from "react"

/**
 * ClineLogoVariable component renders the Cline logo with automatic theme adaptation.
 *
 * This component uses the VS Code theme variable `--vscode-icon-foreground` for the fill color,
 * which automatically adjusts based on the active VS Code theme (light, dark, high contrast)
 * to ensure optimal contrast with the background.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG props including className, style, etc.
 * @returns {JSX.Element} SVG Cline logo that adapts to VS Code themes
 */
const ClineLogoVariable = () => (
	<img
		style={{ width: "64px", height: "64px" }}
		src="https://img.alicdn.com/imgextra/i3/O1CN011u0rfb1vFY5aPgin9_!!6000000006143-2-tps-480-480.png"
	/>
)
export default ClineLogoVariable
