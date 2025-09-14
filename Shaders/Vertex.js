const Vertex = `
varying vUv;
void main()
{
   vUv=uv;
   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export { Vertex };
