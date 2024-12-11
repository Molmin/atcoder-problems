配点 : $700$ 点

## 問題文

$N$ 体のスライムが左右一列に並んでいます。
$i = 1, 2, \ldots, N$ について、左から $i$ 番目のスライムの大きさは $A_i$ です。<br>
$K = 1, 2, \ldots, N$ のそれぞれの場合について、下記の問題を解いてください。

初期状態で左から $K$ 番目にいるスライムが高橋君です。
高橋君が下記の行動を好きな回数（ $0$ 回でも良い）だけ行ったあとの、高橋君の大きさとしてあり得る最大値を求めてください。

- 高橋君に隣接するスライムのうち、高橋君より大きさが真に小さいものを選んで吸収する。
その結果、吸収されたスライムは消滅し、高橋君の大きさは吸収したスライムの大きさだけ増加する。

上記の操作の際、スライムが吸収され消滅したことで生じた隙間は直ちに埋められ、
消滅したスライムの両端のスライムどうし（それらが存在すれば）は新たに隣接します（入出力例１の説明も参照してください）。

## 制約

- $2 \leq N \leq 5 \times 10^5$
- $1 \leq A_i \leq 10^9$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

下記の形式にしたがい、$K = 1, 2, \ldots, N$ のそれぞれの場合における問題の答え $B_K$ をそれぞれ空白区切りで出力せよ。

> $B_1$ $B_2$ $\ldots$ $B_N$

```input1
6
4 13 2 3 2 6
```

```output1
4 30 2 13 2 13
```

例として、$K = 4$ の場合の問題を考えます。
残っているスライムの大きさを列の左にいるスライムのものから順に並べ、高橋君の大きさに対応する値を角括弧$[ ]$で括った列を**列の状態**と呼ぶことにします。
すなわち、初期状態の列の状態は $(4, 13, 2, [3], 2, 6)$ です。高橋君の下記の行動手順を考えます。

- 高橋君が右隣のスライムを吸収する。その結果、吸収されたスライムは消滅し、高橋君の大きさは $3 + 2 = 5$ になる。その後の列の状態は $(4, 13, 2, [5], 6)$ である。
- 高橋君が左隣のスライムを吸収する。その結果、吸収されたスライムは消滅し、高橋君の大きさは $5 + 2 = 7$ になる。その後の列の状態は $(4, 13, [7], 6)$ である。
- 高橋君が右隣のスライムを吸収する。その結果、吸収されたスライムは消滅し、高橋君の大きさは $7 + 6 = 13$ になる。その後の列の状態は $(4, 13, [13])$ である。

高橋君に隣接するスライムであって高橋君より大きさが真に小さいものは存在しないので、高橋君はこれ以上行動することができません。高橋君の最終的な大きさは $13$ であり、これが考えられる最大値です。

```input2
12
22 25 61 10 21 37 2 14 5 8 6 24
```

```output2
22 47 235 10 31 235 2 235 5 235 6 235
```