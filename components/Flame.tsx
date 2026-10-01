"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Gaz brülörü: mavi alev dilleri, imleç yönüne eğilir. Ekran dışındayken durur.
const VS = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`;
const FS = `
precision highp float;
varying vec2 vUv;
uniform float uT; uniform vec2 uR; uniform float uM; uniform float uStatic;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<5;i++){ s+=a*n(p); p*=2.03; a*=.5; } return s; }
void main(){
  vec2 uv = vUv; float asp = uR.x/uR.y;
  vec2 p = vec2((uv.x-.5)*asp, uv.y);
  float t = uT * (1.-uStatic);
  float lean = (uM-.5) * .55 * smoothstep(0.,.8,uv.y);
  p.x -= lean;
  float y = uv.y;
  // brülör delikleri: alt kısımda ayrık diller
  float comb = .55 + .45 * sin(p.x * 46.);
  float base = exp(-y * 3.1);
  float tur = fbm(vec2(p.x * 3.2, y * 2.4 - t * .95));
  float tur2 = fbm(vec2(p.x * 7. + 4., y * 4. - t * 1.7));
  float f = base * 1.55 + (tur - .5) * 1.05 + (tur2 - .5) * .35 - y * .42;
  f *= mix(1., comb, exp(-y * 7.));
  float body = smoothstep(.18, .78, f);
  float core = smoothstep(.62, 1.15, f) * exp(-y * 2.2);
  vec3 col = vec3(.015,.04,.16);
  col += vec3(.10,.28,1.0) * body;
  col = mix(col, vec3(.75,.88,1.), core);
  float tip = smoothstep(.1,.2,f) * (1.-smoothstep(.2,.38,f)) * smoothstep(.05,.35,y);
  col = mix(col, vec3(1.,.38,.08), tip * .6);
  col += vec3(.05,.12,.5) * exp(-y * 2.5) * .5;
  col *= 1. - .35 * length(vec2(uv.x-.5, 0.) * 1.4);
  gl_FragColor = vec4(col, 1.);
}`;

export default function Flame() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "low-power" });
    } catch {
      return; // WebGL yoksa gradyan arka plan kalır
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    el.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block";
    const scene = new THREE.Scene();
    const cam = new THREE.Camera();
    const u = {
      uT: { value: 0 },
      uR: { value: new THREE.Vector2(1, 1) },
      uM: { value: 0.5 },
      uStatic: { value: reduced ? 1 : 0 },
    };
    const mat = new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: FS, uniforms: u });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));
    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h, false);
      u.uR.value.set(w, h);
      renderer.render(scene, cam);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    let mx = 0.5, vis = true, raf = 0;
    const onMove = (e: PointerEvent) => (mx = e.clientX / innerWidth);
    addEventListener("pointermove", onMove, { passive: true });
    const io = new IntersectionObserver(([e]) => (vis = e.isIntersecting));
    io.observe(el);
    const t0 = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!vis || reduced) return;
      u.uT.value = (performance.now() - t0) / 1000;
      u.uM.value += (mx - u.uM.value) * 0.05;
      renderer.render(scene, cam);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
      ro.disconnect();
      io.disconnect();
      mat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);
  return <div ref={host} aria-hidden className="absolute inset-0" />;
}
