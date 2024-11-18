# 1. 介绍
基于turf二次封装地图包，支持空间计算查询  
`github: https://github.com/lukeSuperCoder/turf-util.git`
# 2. 使用
```
npm i turf-util
import turfUtil from 'turf-util'
turfUtil.getDistanceByPoints([125, -15],[113, -22])
```
# 3. API
### 计算面积
描述  
接受一个或多个要素，并返回它们的面积（以平方米为单位）。

### 计算两点间距离
描述  
计算两个点之间的距离，单位可以是度degrees、弧度radians、英里miles或公里kilometers。 这使用Haversine公式来考虑全球曲率。

### 计算两点中心点
描述  
接受两个点，并返回它们之间的中点。 中点是通过大地测量计算的，意味着考虑了地球的曲率。

### 计算线长度
描述  
接受一个GeoJSON对象，并以指定单位测量其长度，忽略(Multi)Point的距离。


