配点: $600$ 点

## 問題文

E869120 君は最初、$2$ 次元平面上の原点 $(0, 0)$ に立っています。  

彼は $N$ 個のエンジンを持っています。エンジンの使い方と機能は以下のようになります。

- $i$ 個目のエンジンを使うと、E869120 君のいる場所の X 座標が $x_i$、Y 座標が $y_i$ 変化する。つまり、E869120 君が座標 $(X, Y)$ にいるときに $i$ 個目のエンジンを使うと、座標 $(X + x_i, Y + y_i)$ に移動する。
- エンジンはどのような順番で使ってもよいが、各エンジンは $1$ 回までしか使えない。ただし、使わないエンジンがあってもよい。

彼は、原点から最も遠い場所に行きたいです。<br>
最後に到達する地点の座標を $(X, Y)$ として、原点からの距離 $\sqrt{X^2 + Y^2}$ の最大値を求めてください。  

## 制約

- $1 \leq N \leq 100$
- $-1 \ 000 \ 000 \leq x_i \leq 1 \ 000 \ 000$
- $-1 \ 000 \ 000 \leq y_i \leq 1 \ 000 \ 000$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。  

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
>  $:$ $:$
> 
> $x_N$ $y_N$

## 出力

最後に到達する地点の、原点からの距離の最大値を実数値として出力せよ。<br>
ただし、実際の答えとの相対誤差または絶対誤差が $10^{-10}$ 以内であれば正解とみなす。  

```input1
3
0 10
5 -5
-5 -5
```

```output1
10.000000000000000000000000000000000000000000000000
```

うまくエンジンを使うと、最後に到達する地点の、原点からの距離を $10$ にすることができます。<br>
これには次の $3$ 通りの方法があります。  

- エンジン $1$ を使って $(0, 10)$ に移動する
- エンジン $2$ を使って $(5, -5)$ に移動し、その後エンジン $3$ を使って $(0, -10)$ に移動する
- エンジン $3$ を使って $(-5, -5)$ に移動し、その後エンジン $2$ を使って $(0, -10)$ に移動する

距離を $10$ より大きくする方法はないので、最大値は $10$ となります。

```input2
5
1 1
1 0
0 1
-1 0
0 -1
```

```output2
2.828427124746190097603377448419396157139343750753
```

最後に到達する地点の、原点からの距離の最大値は $2 \sqrt{2} = 2.82842...$ となります。<br>
これを達成する方法として、次のようなものが挙げられます。  

- エンジン $1$ を使って $(1, 1)$ に移動し、その後エンジン $2$ を使って $(2, 1)$ に移動し、最後にエンジン $3$ を使って $(2, 2)$ に移動する

```input3
5
1 1
2 2
3 3
4 4
5 5
```

```output3
21.213203435596425732025330863145471178545078130654
```

エンジン $1 \rightarrow 2 \rightarrow 3 \rightarrow 4 \rightarrow 5$ の順で全部使うと、最終的に $(15, 15)$ にたどり着き、原点からの距離は $15 \sqrt{2} = 21.2132...$ となります。

```input4
3
0 0
0 1
1 0
```

```output4
1.414213562373095048801688724209698078569671875376
```

$(x_i, y_i) = (0, 0)$ である、何の意味も持たないエンジンがある可能性もあります。  

```input5
1
90447 91000
```

```output5
128303.000000000000000000000000000000000000000000000000
```

$1$ 個しかエンジンがない場合もあることにご注意ください。  

```input6
2
96000 -72000
-72000 54000
```

```output6
120000.000000000000000000000000000000000000000000000000
```

$2$ 個しかエンジンがない場合もあります。  

```input7
10
1 2
3 4
5 6
7 8
9 10
11 12
13 14
15 16
17 18
19 20
```

```output7
148.660687473185055226120082139313966514489855137208
```