配点 : $500$ 点

## 問題文

$xy$平面上の$0 \leq x \leq W, 0 \leq y \leq H$をみたす領域にある$x,y$ともに整数である点すべてに、ひとつずつ家があります。

$x$座標が等しく$y$座標の差が$1$であるか、$y$座標が等しく$x$座標の差が$1$であるような$2$点の組のうち、両方の点に家が存在するような全てのものに対し、その$2$点の間には舗装されていない道路があります。

座標$(i,j)$と$(i+1,j)$にある家の間の道路を舗装するのには$j$の値にかかわらずコストが$p_i$、
座標$(i,j)$と$(i,j+1)$にある家の間の道路を舗装するのには$i$の値にかかわらずコストが$q_j$かかります。

高橋君は、このうちいくつかの道路を舗装し、舗装された道路のみを通って任意の$2$つの家の間を行き来できるようにしたいです。
かかるコストの総和の最小値を求めてください。

## 制約

- $1 \leq W,H \leq 10^5$
- $1 \leq p_i \leq 10^8(0 \leq i \leq W-1)$
- $1 \leq q_j \leq 10^8(0 \leq j \leq H-1)$
- $p_i(0 \leq i \leq W-1)$は整数である
- $q_j(0 \leq j \leq H-1)$は整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $W$ $H$
> 
> $p_0$
> 
> :
> 
> $p_{W-1}$
> 
> $q_0$
> 
> :
> 
> $q_{H-1}$

## 出力

コストの総和の最小値を表す整数を出力せよ。

```input1
2 2
3
5
2
7
```

```output1
29
```

次の$8$本の道路を舗装すればよいです。

- $(0,0)$と$(0,1)$にある家を結ぶ道路
- $(0,1)$と$(1,1)$にある家を結ぶ道路
- $(0,2)$と$(1,2)$にある家を結ぶ道路
- $(1,0)$と$(1,1)$にある家を結ぶ道路
- $(1,0)$と$(2,0)$にある家を結ぶ道路
- $(1,1)$と$(1,2)$にある家を結ぶ道路
- $(1,2)$と$(2,2)$にある家を結ぶ道路
- $(2,0)$と$(2,1)$にある家を結ぶ道路

```input2
4 3
2
4
8
1
2
9
3
```

```output2
60
```