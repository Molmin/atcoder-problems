配点 : $200$ 点

## 問題文

高橋君は、横一列に並んだ $100$ 個の鍵盤からなるピアノを持っています。
このピアノの左から $i$ 個目の鍵盤のことを鍵盤 $i$ と呼びます。

高橋君は今から $N$ 回にわたってこのピアノの鍵盤を一つずつ押すことでとある曲を演奏します。
$i$ 回目に押す鍵盤は鍵盤 $A_i$ であり、それを押す手は $S_i=$ `L` のとき左手、$S_i=$ `R` のとき右手です。 

演奏を始める前、高橋君は両手をそれぞれ好きな鍵盤の上に置くことができ、この時点での**疲労度**は $0$ です。
演奏中、片方の手を鍵盤 $x$ の上から鍵盤 $y$ の上へと動かすと疲労度が $|y-x|$ 増加します（逆に、手の移動以外で疲労度が増加することはありません）。
なお、ある手である鍵盤を押すためには、その手がその鍵盤の上に置かれている必要があります。

演奏が終了した時点での疲労度は最小でいくつになるか求めてください。

## 制約

- $1\leq N \leq 100$
- $1\leq A_i \leq 100$
- $N,A_i$ は整数
- $S_i$ は `L` または `R`

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $S_1$
> 
> $A_2$ $S_2$
> 
> $\vdots$
> 
> $A_N$ $S_N$

## 出力

演奏が終了した時点での疲労度の最小値を出力せよ。

```input1
4
3 L
6 R
9 L
1 R
```

```output1
11
```

例えば以下のように演奏することができます。

- 最初、左手を鍵盤 $3$ の上に、右手を鍵盤 $6$ の上に置いておく。
- 左手で鍵盤 $3$ を押す。
- 右手で鍵盤 $6$ を押す。
- 左手を鍵盤 $3$ の上から鍵盤 $9$ の上へと動かす。疲労度が $|9-3|=6$ 増加する。
- 右手を鍵盤 $6$ の上から鍵盤 $1$ の上へと動かす。疲労度が $|1-6|=5$ 増加する。
- 左手で鍵盤 $9$ を押す。
- 右手で鍵盤 $1$ を押す。

このとき、演奏が終了した時点での疲労度は $6+5=11$ であり、これが最小です。

```input2
3
2 L
2 L
100 L
```

```output2
98
```

```input3
8
22 L
75 L
26 R
45 R
72 R
81 R
47 L
29 R
```

```output3
188
```