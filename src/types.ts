import type * as motionone from "@motionone/dom"
import type {PropertiesHyphen} from "csstype"
import type {JSX, ParentProps} from "solid-js"

export type {VariantDefinition, Options} from "@motionone/dom"

// 🆕 Drag System Types
export interface DragConstraints {
	left?: number
	right?: number
	top?: number
	bottom?: number
	ref?: Element
}

export interface PanInfo {
	point: { x: number; y: number }
	offset: { x: number; y: number }
	velocity: { x: number; y: number }
	distance: { x: number; y: number }
}

export interface DragOptions {
	drag?: boolean | "x" | "y"
	dragConstraints?: DragConstraints
	dragElastic?: boolean | number
	dragMomentum?: boolean
	dragSnapToOrigin?: boolean
	whileDrag?: motionone.VariantDefinition
	onDragStart?: (event: PointerEvent, info: PanInfo) => void
	onDrag?: (event: PointerEvent, info: PanInfo) => void
	onDragEnd?: (event: PointerEvent, info: PanInfo) => void
}

// 🆕 Layout Animation Types
export interface LayoutOptions {
	layout?: boolean | "position" | "size"
	layoutId?: string
	layoutRoot?: boolean
	layoutScroll?: boolean
	layoutDependency?: any
}

export interface LayoutState {
	element: Element
	id: string | undefined
	snapshot: DOMRect
	isAnimating: boolean
}

// 🆕 Scroll Integration Types
export interface ScrollOptions {
	container?: Element | Window
	offset?: number | [number, number]
	once?: boolean
	amount?: "some" | "all" | number
}

export interface ScrollPosition {
	x: number
	y: number
	progress: number
	velocity: { x: number; y: number }
}

export interface ScrollState {
	position: ScrollPosition
	isScrolling: boolean
	container: Element | Window
}

export interface TransformOptions {
	easing?: (t: number) => number
	clamp?: boolean
}

export interface ParallaxOptions {
	parallax?: boolean | number
	speed?: number
	offset?: number
	container?: Element | Window
}

// 🆕 Advanced Gesture Types
export interface MultiTouchOptions {
	minTouches?: number
	maxTouches?: number
	onMultiTouchStart?: (event: TouchEvent, state: any) => void
	onMultiTouchMove?: (event: TouchEvent, state: any) => void
	onMultiTouchEnd?: (event: TouchEvent, state: any) => void
}

export interface PinchZoomOptions {
	pinchZoom?: boolean
	initialScale?: number
	initialRotation?: number
	minScale?: number
	maxScale?: number
	momentum?: boolean
	momentumDecay?: number
	constraints?: {
		minScale?: number
		maxScale?: number
		minRotation?: number
		maxRotation?: number
	}
	onPinchStart?: (event: TouchEvent, state: any) => void
	onPinchMove?: (event: TouchEvent, state: any) => void
	onPinchEnd?: (event: TouchEvent, state: any) => void
}

// 🆕 Stagger Animation Types
export interface StaggerOptions {
	stagger?: number | StaggerConfig
	staggerDirection?: "forward" | "reverse" | "from" | "from-center" | "from-start" | "from-end"
	staggerChildren?: boolean | number
	staggerDelay?: number
	staggerDelayChildren?: number
	onStaggerStart?: (state: StaggerState) => void
	onStaggerComplete?: (state: StaggerState) => void
}

export interface StaggerConfig {
	delay?: number
	delayChildren?: number
	direction?: "forward" | "reverse" | "from" | "from-center" | "from-start" | "from-end"
	from?: number
	to?: number
}

export interface TimelineOptions {
	timeline?: TimelineConfig
	timelineDuration?: number
	timelineEasing?: (t: number) => number
	timelineRepeat?: number | "loop" | "reverse"
	timelineRepeatDelay?: number
	onTimelineStart?: (progress: number) => void
	onTimelineUpdate?: (progress: number) => void
	onTimelineComplete?: (progress: number) => void
}

export interface TimelineConfig {
	duration?: number
	easing?: (t: number) => number
	repeat?: number | "loop" | "reverse"
	repeatDelay?: number
	segments?: TimelineSegment[]
}

export interface TimelineSegment {
	at?: number
	animation?: motionone.VariantDefinition
	duration?: number
	easing?: (t: number) => number
}

export interface OrchestrationOptions {
	orchestrate?: boolean
	orchestrateDelay?: number
	orchestrateStagger?: number
			orchestrateDirection?: "forward" | "reverse" | "from" | "from-center"
		orchestrateFrom?: number
		orchestrateTo?: number
		// 🆕 Phase 6: Advanced animation properties
		spring?: SpringConfig | boolean
		springStiffness?: number
		springDamping?: number
		springMass?: number
		springRestDelta?: number
		springRestSpeed?: number
		keyframes?: KeyframeConfig
		keyframeEasing?: (t: number) => number | Array<(t: number) => number>
		keyframeOffset?: number | Array<number>
		variants?: Record<string, AnimationVariant>
		initial?: string | AnimationVariant
		animate?: string | AnimationVariant
		exit?: string | AnimationVariant
		whileHover?: string | AnimationVariant
		whileTap?: string | AnimationVariant
		whileFocus?: string | AnimationVariant
		whileDrag?: string | AnimationVariant
		whilePinch?: string | AnimationVariant
		custom?: any
		gestureAnimation?: boolean
		gestureVariants?: Record<string, AnimationVariant>
	}

export interface StaggerState {
	isStaggering: boolean
	currentIndex: number
	totalElements: number
	progress: number
	direction: string
}

// 🆕 Phase 6: Advanced Animation Features Types
export interface SpringConfig {
	stiffness?: number
	damping?: number
	mass?: number
	restDelta?: number
	restSpeed?: number
}

export interface SpringOptions {
	spring?: SpringConfig | boolean
	springStiffness?: number
	springDamping?: number
	springMass?: number
	springRestDelta?: number
	springRestSpeed?: number
}

export interface KeyframeConfig {
	[key: string]: number | string | Array<number | string>
}

export interface KeyframeOptions {
	keyframes?: KeyframeConfig
	keyframeEasing?: (t: number) => number | Array<(t: number) => number>
	keyframeOffset?: number | Array<number>
}

export interface AnimationVariant {
	[key: string]: any
}

export interface VariantsOptions {
	variants?: Record<string, AnimationVariant>
	initial?: string | AnimationVariant
	animate?: string | AnimationVariant
	exit?: string | AnimationVariant
	whileHover?: string | AnimationVariant
	whileTap?: string | AnimationVariant
	whileFocus?: string | AnimationVariant
	whileDrag?: string | AnimationVariant
	whilePinch?: string | AnimationVariant
	custom?: any
}

export interface AnimationControls {
	start?: () => void
	stop?: () => void
	pause?: () => void
	resume?: () => void
	reverse?: () => void
	seek?: (progress: number) => void
	set?: (values: any) => void
}

export interface AnimationControlOptions {
	controls?: AnimationControls
	onAnimationStart?: () => void
	onAnimationComplete?: () => void
	onAnimationUpdate?: (progress: number) => void
}

export interface GestureAnimationOptions {
	gestureAnimation?: boolean
	gestureVariants?: Record<string, AnimationVariant>
	onGestureStart?: (gesture: string) => void
	onGestureEnd?: (gesture: string) => void
}

export interface MultiTouchState {
	element: Element
	isActive: boolean
	touches: Touch[]
	center: { x: number; y: number }
	distance: number
	angle: number
	scale: number
	rotation: number
	velocity: { x: number; y: number; scale: number; rotation: number }
}

export interface PinchZoomState {
	element: Element
	isActive: boolean
	scale: number
	rotation: number
	center: { x: number; y: number }
	velocity: { scale: number; rotation: number }
	initialScale: number
	initialRotation: number
}

// 🆕 Gesture State Management
export interface GestureState {
	isHovering: boolean
	isPressing: boolean
	isDragging: boolean
	isFocused: boolean
	isPinching: boolean
	panInfo?: PanInfo
	multiTouchInfo?: MultiTouchState
	pinchZoomInfo?: PinchZoomState
}

export interface MotionEventHandlers {
	onMotionStart?: (event: motionone.MotionEvent) => void
	onMotionComplete?: (event: motionone.MotionEvent) => void
	onHoverStart?: (event: motionone.CustomPointerEvent) => void
	onHoverEnd?: (event: motionone.CustomPointerEvent) => void
	onPressStart?: (event: motionone.CustomPointerEvent) => void
	onPressEnd?: (event: motionone.CustomPointerEvent) => void
	onViewEnter?: (event: motionone.ViewEvent) => void
	onViewLeave?: (event: motionone.ViewEvent) => void
	// 🆕 Drag event handlers
	onDragStart?: (event: PointerEvent, info: PanInfo) => void
	onDrag?: (event: PointerEvent, info: PanInfo) => void
	onDragEnd?: (event: PointerEvent, info: PanInfo) => void
	// 🆕 Multi-touch event handlers
	onMultiTouchStart?: (event: TouchEvent, state: MultiTouchState) => void
	onMultiTouchMove?: (event: TouchEvent, state: MultiTouchState) => void
	onMultiTouchEnd?: (event: TouchEvent, state: MultiTouchState) => void
	// 🆕 Pinch zoom event handlers
	onPinchStart?: (event: TouchEvent, state: PinchZoomState) => void
	onPinchMove?: (event: TouchEvent, state: PinchZoomState) => void
	onPinchEnd?: (event: TouchEvent, state: PinchZoomState) => void
	// 🆕 Stagger and orchestration event handlers
	onStaggerStart?: (state: StaggerState) => void
	onStaggerComplete?: (state: StaggerState) => void
	onTimelineStart?: (progress: number) => void
	onTimelineUpdate?: (progress: number) => void
	onTimelineComplete?: (progress: number) => void
	// 🆕 Phase 6: Advanced animation event handlers
	onSpringStart?: (config: SpringConfig) => void
	onSpringComplete?: (config: SpringConfig) => void
	onKeyframeStart?: (keyframes: KeyframeConfig) => void
	onKeyframeComplete?: (keyframes: KeyframeConfig) => void
	onVariantStart?: (variant: string, config: AnimationVariant) => void
	onVariantComplete?: (variant: string, config: AnimationVariant) => void
	onGestureAnimationStart?: (gesture: string) => void
	onGestureAnimationEnd?: (gesture: string) => void
}

declare module "@motionone/dom" {
	/*
	 Solid style attribute supports only kebab-case properties.
	 While @motionone/dom supports both camelCase and kebab-case,
	 but provides only camelCase properties in the types.
	*/
	interface CSSStyleDeclarationWithTransform
		extends Omit<PropertiesHyphen, "direction" | "transition"> {}

	/*
	 exit is missing in types in motionone core
	 because it is only used in the Presence implementations
	*/
	interface Options {
		exit?: motionone.VariantDefinition
		// 🆕 Extend Options with drag properties
		drag?: boolean | "x" | "y"
		dragConstraints?: DragConstraints
		dragElastic?: boolean | number
		dragMomentum?: boolean
		dragSnapToOrigin?: boolean
		whileDrag?: motionone.VariantDefinition
		// 🆕 Extend Options with layout properties
		layout?: boolean | "position" | "size"
		layoutId?: string
		layoutRoot?: boolean
		layoutScroll?: boolean
		layoutDependency?: any
		// 🆕 Extend Options with scroll properties
		scroll?: boolean
		scrollContainer?: Element | Window
		scrollOffset?: number | [number, number]
		scrollOnce?: boolean
		scrollAmount?: "some" | "all" | number
		parallax?: boolean | number
		parallaxSpeed?: number
		parallaxOffset?: number
		// 🆕 Extend Options with advanced gesture properties
		multiTouch?: boolean | MultiTouchOptions
		pinchZoom?: boolean | PinchZoomOptions
		minTouches?: number
		maxTouches?: number
		initialScale?: number
		initialRotation?: number
		minScale?: number
		maxScale?: number
		momentum?: boolean
		momentumDecay?: number
		whilePinch?: motionone.VariantDefinition
		// 🆕 Extend Options with stagger and orchestration properties
		stagger?: number | StaggerConfig
		staggerDirection?: "forward" | "reverse" | "from" | "from-center" | "from-start" | "from-end"
		staggerChildren?: boolean | number
		staggerDelay?: number
		staggerDelayChildren?: number
		timeline?: TimelineConfig
		timelineDuration?: number
		timelineEasing?: (t: number) => number
		timelineRepeat?: number | "loop" | "reverse"
		timelineRepeatDelay?: number
		orchestrate?: boolean
		orchestrateDelay?: number
		orchestrateStagger?: number
		orchestrateDirection?: "forward" | "reverse" | "from" | "from-center"
		orchestrateFrom?: number
		orchestrateTo?: number
	}
}

// 🆕 Extended MotionComponentProps to include all gesture options
export type MotionComponentProps = ParentProps<MotionEventHandlers & motionone.Options & DragOptions & LayoutOptions & ScrollOptions & MultiTouchOptions & PinchZoomOptions & StaggerOptions & TimelineOptions & OrchestrationOptions & SpringOptions & KeyframeOptions & VariantsOptions & AnimationControlOptions & GestureAnimationOptions>

export type MotionComponent = {
	// <Motion />
	(props: JSX.IntrinsicElements["div"] & MotionComponentProps): JSX.Element
	// <Motion tag="div" />
	<T extends keyof JSX.IntrinsicElements>(
		props: JSX.IntrinsicElements[T] & MotionComponentProps & {tag: T},
	): JSX.Element
}

export type MotionProxyComponent<T> = (props: T & MotionComponentProps) => JSX.Element

export type MotionProxy = MotionComponent & {
	// <Motion.div />
	[K in keyof JSX.IntrinsicElements]: MotionProxyComponent<JSX.IntrinsicElements[K]>
}

declare module "solid-js" {
	namespace JSX {
		interface Directives {
			motion: motionone.Options
		}
	}
}

// export only here so the `JSX` import won't be shaken off the tree:
export type E = JSX.Element
