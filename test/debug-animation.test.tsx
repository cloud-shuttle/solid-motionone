import { createRoot } from "solid-js"
import { render } from "@solidjs/testing-library"
import { Motion } from "../src/index.jsx"

describe("Debug Animation", () => {
	test("Simple animation test", async () => {
		let animationCompleted = false
		let elementRef: HTMLDivElement

		await new Promise<void>((resolve, reject) => {
			createRoot((dispose) => {
				render(() => (
					<Motion.div
						ref={(el) => {
							elementRef = el
							console.log("Element created:", el)
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.1 }}
						onMotionComplete={(event) => {
							console.log("Animation completed:", event)
							animationCompleted = true
							resolve()
						}}
					/>
				))

				// Add a timeout to see what happens
				setTimeout(() => {
					console.log("Timeout reached, animation completed:", animationCompleted)
					console.log("Element opacity:", elementRef?.style.opacity)
					dispose()
					reject(new Error("Animation timeout"))
				}, 2000)
			})
		})

		expect(animationCompleted).toBe(true)
		expect(elementRef.style.opacity).toBe("1")
	})
})

