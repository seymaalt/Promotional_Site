const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    // Özelleştirilmiş renk hesaplamaları
    vec3 color = vec3(
        // Kırmızı (R) bileşeni
        191.0 / 255.0,  // #bf8bff

        // Yeşil (G) bileşeni
        163.0 / 255.0,  // #cca3ff

        // Mavi (B) bileşeni
        255.0 / 255.0   // #dabcff
    );

    // Renkleri distort etmeden önce normalize et
    color = normalize(color);

    // Renkleri distort et
    color *= 1.0 - distort;

    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
