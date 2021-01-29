class Tile {
  constructor(tex) {
    this.tex = tex;
  }
  
  render(t, level, layer, x, y, z) {
    let u0 = this.tex / 16.0;
    let u1 = u0 + 0.0624375;
    let v0 = 0.0;
    let v1 = v0 + 0.0624375;
    let c1 = 1.0;
    let c2 = 0.8;
    let c3 = 0.6;
    let x0 = x + 0.0;
    let x1 = x + 1.0;
    let y0 = y + 0.0;
    let y1 = y + 1.0;
    let z0 = z + 0.0;
    let z1 = z + 1.0;
    if (!level.isSolidTile(x, y - 1, z)) {
      let br = level.getBrightness(x, y - 1, z) * c1;
      if ((((br == c1) ? 1 : 0) ^ ((layer == 1) ? 1 : 0)) != 0) {
        t.color(br, br, br);
        t.tex(u0, v1);
        t.vertex(x0, y0, z1);
        t.tex(u0, v0);
        t.vertex(x0, y0, z0);
        t.tex(u1, v0);
        t.vertex(x1, y0, z0);
        t.tex(u1, v1);
        t.vertex(x1, y0, z1);
      } 
    } 
    if (!level.isSolidTile(x, y + 1, z)) {
      let br = level.getBrightness(x, y, z) * c1;
      if ((((br == c1) ? 1 : 0) ^ ((layer == 1) ? 1 : 0)) != 0) {
        t.color(br, br, br);
        t.tex(u1, v1);
        t.vertex(x1, y1, z1);
        t.tex(u1, v0);
        t.vertex(x1, y1, z0);
        t.tex(u0, v0);
        t.vertex(x0, y1, z0);
        t.tex(u0, v1);
        t.vertex(x0, y1, z1);
      } 
    } 
    if (!level.isSolidTile(x, y, z - 1)) {
      let br = level.getBrightness(x, y, z - 1) * c2;
      if ((((br == c2) ? 1 : 0) ^ ((layer == 1) ? 1 : 0)) != 0) {
        t.color(br, br, br);
        t.tex(u1, v0);
        t.vertex(x0, y1, z0);
        t.tex(u0, v0);
        t.vertex(x1, y1, z0);
        t.tex(u0, v1);
        t.vertex(x1, y0, z0);
        t.tex(u1, v1);
        t.vertex(x0, y0, z0);
      } 
    } 
    if (!level.isSolidTile(x, y, z + 1)) {
      let br = level.getBrightness(x, y, z + 1) * c2;
      if ((((br == c2) ? 1 : 0) ^ ((layer == 1) ? 1 : 0)) != 0) {
        t.color(br, br, br);
        t.tex(u0, v0);
        t.vertex(x0, y1, z1);
        t.tex(u0, v1);
        t.vertex(x0, y0, z1);
        t.tex(u1, v1);
        t.vertex(x1, y0, z1);
        t.tex(u1, v0);
        t.vertex(x1, y1, z1);
      } 
    } 
    if (!level.isSolidTile(x - 1, y, z)) {
      let br = level.getBrightness(x - 1, y, z) * c3;
      if ((((br == c3) ? 1 : 0) ^ ((layer == 1) ? 1 : 0)) != 0) {
        t.color(br, br, br);
        t.tex(u1, v0);
        t.vertex(x0, y1, z1);
        t.tex(u0, v0);
        t.vertex(x0, y1, z0);
        t.tex(u0, v1);
        t.vertex(x0, y0, z0);
        t.tex(u1, v1);
        t.vertex(x0, y0, z1);
      } 
    } 
    if (!level.isSolidTile(x + 1, y, z)) {
      let br = level.getBrightness(x + 1, y, z) * c3;
      if ((((br == c3) ? 1 : 0) ^ ((layer == 1) ? 1 : 0)) != 0) {
        t.color(br, br, br);
        t.tex(u0, v1);
        t.vertex(x1, y0, z1);
        t.tex(u1, v1);
        t.vertex(x1, y0, z0);
        t.tex(u1, v0);
        t.vertex(x1, y1, z0);
        t.tex(u0, v0);
        t.vertex(x1, y1, z1);
      } 
    } 
  }
  
  renderFace(t, x, y, z, face) {
    let x0 = x + 0.0;
    let x1 = x + 1.0;
    let y0 = y + 0.0;
    let y1 = y + 1.0;
    let z0 = z + 0.0;
    let z1 = z + 1.0;
    if (face == 0) {
      t.vertex(x0, y0, z1);
      t.vertex(x0, y0, z0);
      t.vertex(x1, y0, z0);
      t.vertex(x1, y0, z1);
    } 
    if (face == 1) {
      t.vertex(x1, y1, z1);
      t.vertex(x1, y1, z0);
      t.vertex(x0, y1, z0);
      t.vertex(x0, y1, z1);
    } 
    if (face == 2) {
      t.vertex(x0, y1, z0);
      t.vertex(x1, y1, z0);
      t.vertex(x1, y0, z0);
      t.vertex(x0, y0, z0);
    } 
    if (face == 3) {
      t.vertex(x0, y1, z1);
      t.vertex(x0, y0, z1);
      t.vertex(x1, y0, z1);
      t.vertex(x1, y1, z1);
    } 
    if (face == 4) {
      t.vertex(x0, y1, z1);
      t.vertex(x0, y1, z0);
      t.vertex(x0, y0, z0);
      t.vertex(x0, y0, z1);
    } 
    if (face == 5) {
      t.vertex(x1, y0, z1);
      t.vertex(x1, y0, z0);
      t.vertex(x1, y1, z0);
      t.vertex(x1, y1, z1);
    } 
  }
}

let rock = new Tile(0);

let grass = new Tile(1);