const turf = require('@turf/turf');
const turfUtil = {
  /**
   * 计算面积
   * @param {*} areas 
   * @returns number 面积大小
   */
  getAreaByPolygon: function (areas) {
    let polygon = turf.polygon(areas);
    let area = turf.area(polygon);
    return area;
  },
  /**
   * 计算两点间距离
   * @param {*} Point (start,end,option)
   * @returns number 两点间距离
   */
  getDistanceByPoints: function (start, end, option) {
    let from = turf.point(start);
    let to = turf.point(end);
    let options = Object.assign({
      units: "miles"
    }, option);
    let distance = turf.distance(from, to, options);
    return distance;
  },
  /**
   * 计算两点中心点
   * @param {*} Point (start,end)
   * @returns Point 两点中心点
   */
  getMidByPoints: function (start, end) {
    let from = turf.point(start);
    let to = turf.point(end);
    let midpoint = turf.midpoint(from, to).geometry.coordinates;
    return midpoint;
  },
  /**
   * 计算线长度
   * @param {*} Point (lines, option)
   * @returns number 线段长度
   */
  getLengthByLine: function (lines, option) {
    let line = turf.lineString(lines);
    let options = Object.assign({
      units: 'miles'
    }, option);
    let length = turf.length(line, options);
    return length;
  },
  /**
   * 原生实例
   * @returns turf
   */
  turfInstance: turf
};
export default turfUtil;