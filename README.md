<p>
  <img width="100%" src="https://assets.solidjs.com/banner?background=tiles&project=solid-motionone" alt="solid-motionone">
</p>

# solid-motionone

A tiny, performant animation library for SolidJS with advanced features including drag, layout animations, scroll integration, advanced gestures, and orchestration.

## ✨ Features

### 🎯 Core Animation
- **Tiny & Performant**: Only 54kb gzipped
- **TypeScript**: Full type safety
- **SolidJS Native**: Built specifically for SolidJS reactivity

### 🖱️ Drag System (Phase 1)
- **Drag Constraints**: Limit drag boundaries
- **Drag Momentum**: Physics-based momentum
- **Elastic Drag**: Smooth elastic behavior
- **Drag Events**: Complete event handling

### 🎨 Layout Animations (Phase 2)
- **FLIP Technique**: Smooth layout transitions
- **Shared Elements**: Seamless element transitions
- **LayoutGroup**: Coordinate layout animations
- **Layout Detection**: Automatic layout change detection

### 📜 Scroll Integration (Phase 3)
- **Scroll Tracking**: Real-time scroll position
- **Parallax Effects**: Smooth parallax animations
- **Viewport Detection**: Enter/leave animations
- **Scroll-Based Animations**: Trigger animations on scroll

### 👆 Advanced Gestures (Phase 4)
- **Multi-Touch**: Multi-finger gesture recognition
- **Pinch-to-Zoom**: Scale and rotation gestures
- **Gesture Constraints**: Min/max scale and rotation
- **Momentum**: Gesture momentum with decay

### 🎼 Orchestration (Phase 5)
- **Stagger Animations**: Sequential element animations
- **Timeline Sequencing**: Complex animation sequences
- **Orchestration Controls**: Combined stagger and timeline
- **Performance Optimized**: RAF batching and memory management

## 📦 Installation

```bash
npm install solid-motionone
# or
pnpm add solid-motionone
# or
yarn add solid-motionone
```

## 🚀 Quick Start

```tsx
import { Motion } from "solid-motionone"

function App() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      drag
      layout
      scroll
      pinchZoom
      stagger={0.1}
    >
      Animated Element
    </Motion.div>
  )
}
```

## 📚 Examples

### Basic Animation
```tsx
<Motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Fade In
</Motion.div>
```

### Drag System
```tsx
<Motion.div
  drag
  dragConstraints={{ left: -100, right: 100 }}
  dragMomentum
  whileDrag={{ scale: 1.1 }}
  onDragStart={(event, info) => console.log("Drag started")}
  onDrag={(event, info) => console.log("Dragging")}
  onDragEnd={(event, info) => console.log("Drag ended")}
>
  Draggable Element
</Motion.div>
```

### Layout Animations
```tsx
import { LayoutGroup } from "solid-motionone"

<LayoutGroup>
  <Motion.div
    layout
    layoutId="shared-element"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    Shared Layout Element
  </Motion.div>
</LayoutGroup>
```

### Scroll Integration
```tsx
<Motion.div
  scroll
  parallax={0.5}
  onViewEnter={() => console.log("Entered viewport")}
  onViewLeave={() => console.log("Left viewport")}
>
  Scroll Element
</Motion.div>
```

### Advanced Gestures
```tsx
<Motion.div
  pinchZoom
  minScale={0.5}
  maxScale={3.0}
  momentum
  whilePinch={{ scale: 1.05, opacity: 0.8 }}
  onPinchStart={(event, state) => console.log("Pinch started")}
  onPinchMove={(event, state) => console.log("Pinching")}
  onPinchEnd={(event, state) => console.log("Pinch ended")}
>
  Pinch Zoom Element
</Motion.div>
```

### Orchestration
```tsx
<Motion.div
  stagger={0.1}
  staggerDirection="from-center"
  timeline={{
    duration: 2000,
    segments: [
      { at: 0, animation: { opacity: 0 } },
      { at: 500, animation: { opacity: 1 } },
      { at: 1500, animation: { opacity: 0.8 } }
    ],
    repeat: "loop"
  }}
  orchestrate
  onStaggerStart={(state) => console.log("Stagger started")}
  onTimelineUpdate={(progress) => console.log("Timeline:", progress)}
>
  Orchestrated Element
</Motion.div>
```

### Complex Combination
```tsx
<Motion.div
  // Core animations
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  
  // Drag system
  drag
  dragConstraints={{ left: -50, right: 50 }}
  
  // Layout animations
  layout
  layoutId="complex-element"
  
  // Scroll integration
  scroll
  parallax={0.3}
  
  // Advanced gestures
  pinchZoom
  minScale={0.8}
  maxScale={2.0}
  
  // Orchestration
  stagger={0.2}
  orchestrate
>
  Complex Animated Element
</Motion.div>
```

## 🎯 API Reference

### Motion Component Props

#### Core Animation
- `initial` - Initial animation state
- `animate` - Target animation state
- `exit` - Exit animation state
- `transition` - Animation configuration
- `variants` - Reusable animation states

#### Drag System
- `drag` - Enable drag (boolean | "x" | "y")
- `dragConstraints` - Drag boundaries
- `dragElastic` - Elastic drag behavior
- `dragMomentum` - Enable momentum
- `whileDrag` - Animation during drag
- `onDragStart` - Drag start callback
- `onDrag` - Drag move callback
- `onDragEnd` - Drag end callback

#### Layout Animations
- `layout` - Enable layout animations
- `layoutId` - Shared element identifier
- `layoutRoot` - Layout root element
- `layoutScroll` - Include scroll in layout

#### Scroll Integration
- `scroll` - Enable scroll tracking
- `scrollContainer` - Scroll container element
- `parallax` - Parallax effect strength
- `onViewEnter` - Enter viewport callback
- `onViewLeave` - Leave viewport callback

#### Advanced Gestures
- `multiTouch` - Enable multi-touch
- `pinchZoom` - Enable pinch-to-zoom
- `minScale` - Minimum scale
- `maxScale` - Maximum scale
- `momentum` - Enable gesture momentum
- `whilePinch` - Animation during pinch
- `onPinchStart` - Pinch start callback
- `onPinchMove` - Pinch move callback
- `onPinchEnd` - Pinch end callback

#### Orchestration
- `stagger` - Stagger delay (number | config)
- `staggerDirection` - Stagger direction
- `timeline` - Timeline configuration
- `orchestrate` - Enable orchestration
- `onStaggerStart` - Stagger start callback
- `onStaggerComplete` - Stagger complete callback
- `onTimelineStart` - Timeline start callback
- `onTimelineUpdate` - Timeline update callback
- `onTimelineComplete` - Timeline complete callback

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📊 Performance

- **Bundle Size**: 54kb (gzipped)
- **Runtime Performance**: Optimized with RAF batching
- **Memory Usage**: Efficient memory management
- **TypeScript**: Full type safety

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🎉 Acknowledgments

Built on top of [@motionone/dom](https://motion.dev/) with SolidJS integration.

---

**solid-motionone** - Powerful animations for SolidJS applications! 🚀
