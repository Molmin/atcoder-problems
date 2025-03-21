配点 : $600$ 点

## 問題文

$xy$ 平面上に $2$ 直線 $y=-100,\ y=100$ で囲まれた通路があります。

この通路の中の $-100 &lt; x &lt; 100$ の部分に $N$ 本の大きさの無視できる釘が打たれており、 $i$ 本目の釘の座標は $(x_i, y_i)$ です。

高橋くんは実数 $r \ (0 &lt; r \leq 100)$ を $1$ つ選び、半径 $r$ の円を中心が $(-10^9, 0)$ に位置するように置きます。

その後、円を $(-10^9, 0)$ から $(10^9, 0)$ まで移動させます。

このとき、円は通路の境界や釘が円の内部に入らないような範囲で連続的に動かすことができるものとします。

円を $(10^9, 0)$ まで動かせるような最大の $r$ を求めてください。

## 制約

- 入力はすべて整数
- $1 \leq N \leq 100$
- $|x_i|, |y_i| &lt; 100$
- $i \neq j$ ならば $(x_i, y_i) \neq (x_j, y_j)$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## 出力

円を $(10^9, 0)$ まで動かせるような最大の $r$ を出力せよ。<br>
なお、想定解答との絶対誤差または相対誤差が $10^{-4}$ 以下であれば正解として扱われる。

```input1
2
0 -40
0 40
```

```output1
40
```

![](https://img.atcoder.jp/ghi/493d8b75d6dd331fcc0f3949f12262b3.jpg)

$r=40$ の円を図のように $y=0$ に沿って動かすと、 $(-10^9, 0)$ から $(10^9, 0)$ まで移動させることができます。

$x=0$ のときにちょうど $2$ つの点と接しますが、円の内部には入っていないため問題ありません。

$r$ を $40$ より大きくすると、円の中心を $(10^9, 0)$ まで動かすことができなくなるため、 $r=40$ が最大になります。

```input2
4
0 -10
99 10
0 91
99 -91
```

```output2
50.5
```

```input3
10
-90 40
20 -30
0 -90
10 -70
80 70
-90 30
-20 -80
10 90
50 30
60 -70
```

```output3
33.541019662496845446
```

```input4
10
65 -90
-34 -2
62 99
42 -13
47 -84
84 87
16 -78
56 35
90 8
90 19
```

```output4
35.003571246374276203
```