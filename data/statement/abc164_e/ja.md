配点 : $500$ 点

## 問題文

$1$ から $N$ までの番号がつけられた $N$ 個の都市があります。
これらの都市は $M$ 本の鉄道路線によって結ばれています。  

あなたは現在、金貨を $10^{100}$ 枚、銀貨を $S$ 枚持った状態で都市 $1$ にいます。

$i$ 番目の鉄道路線は、都市 $U_i$ と都市 $V_i$ を双方向に結んでおり、片道の運賃は 銀貨 $A_i$ 枚、移動にかかる時間は $B_i$ 分です。
運賃を金貨で払うことはできません。  

各都市には両替所があり、都市 $i$ の両替所では金貨 $1$ 枚を銀貨 $C_i$ 枚と交換することができます。
交換には、金貨 $1$ 枚あたり $D_i$ 分かかります。<br>
各交換所では、金貨を何枚でも交換することができます。  

$t=2,...,N$ について、都市 $1$ から都市 $t$ への移動にかかる最小の時間を求めてください。電車を待つのにかかる時間は無視して構いません。  

## 制約

- $2 \leq N \leq 50$
- $N-1 \leq M \leq 100$
- $0 \leq S \leq 10^9$
- $1 \leq A_i \leq 50$
- $1 \leq B_i,C_i,D_i \leq 10^9$
- $1 \leq U_i &lt; V_i \leq N$
- $(U_i,V_i)=(U_j,V_j)$ なる $i,j(i \neq j)$ は存在しない
- 都市 $1$ から都市 $t=2,...,N$ にいくつかの鉄道路線を使って移動することができる。
- 入力はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。  

> $N$ $M$ $S$
> 
> $U_1$ $V_1$ $A_1$ $B_1$
> 
> $:$
> 
> $U_M$ $V_M$ $A_M$ $B_M$
> 
> $C_1$ $D_1$
> 
> $:$
> 
> $C_N$ $D_N$

## 出力

$t=2,...,N$について、都市 $1$ から都市 $t$ への移動にかかる最小の時間を順番に一行ずつ出力せよ。

```input1
3 2 1
1 2 1 2
1 3 2 4
1 11
1 2
2 5
```

```output1
2
14
```

この入力中の鉄道網は以下のようなものです。

ここで、図中の都市のラベルは

- 一段目に都市の番号 $i$
- 二段目に $C_i / D_i$

の形式に従っています。同様に、鉄道路線のラベルは

- 一段目に鉄道路線の番号 $i$
- 二段目に $A_i / B_i$

の形式に従っています。

![図](https://img.atcoder.jp/ghi/83f6a1d296d017f40372ea1e1d3b26e5.png)

以下のように行動することで、 都市 $1$ から都市 $2$ へ $2$ 分で移動できます。

- $1$ 番目の鉄道路線を使って、都市 $1$ から都市 $2$ へ移動する。(所要時間: $2$ 分)

<br>

以下のように行動することで、 都市 $1$ から都市 $3$ へ $14$ 分で移動できます。

- $1$ 番目の鉄道路線を使って、都市 $1$ から都市 $2$ へ移動する。(所要時間: $2$ 分)
- 都市 $2$ の両替所で、金貨 $3$ 枚を銀貨 $3$ 枚と交換する。(所要時間: $6$ 分)
- $1$ 番目の鉄道路線を使って、都市 $2$ から都市 $1$ へ移動する。(所要時間: $2$ 分)
- $2$ 番目の鉄道路線を使って、都市 $1$ から都市 $3$ へ移動する。(所要時間: $4$ 分)

```input2
4 4 1
1 2 1 5
1 3 4 4
2 4 2 2
3 4 1 1
3 1
3 1
5 2
6 4
```

```output2
5
5
7
```

この入力中の鉄道網は以下のようなものです。

![図](https://img.atcoder.jp/ghi/a081a72c42da7902a30f29f981c368d0.png)

以下のように行動することで、 都市 $1$ から都市 $4$ へ $7$ 分で移動できます。

- 都市 $1$ の両替所で、金貨 $2$ 枚を銀貨 $6$ 枚と交換する。(所要時間: $2$ 分)
- $2$ 番目の鉄道路線を使って、都市 $1$ から都市 $3$ へ移動する。(所要時間: $4$ 分)
- $4$ 番目の鉄道路線を使って、都市 $3$ から都市 $4$ へ移動する。(所要時間: $1$ 分)

```input3
6 5 1
1 2 1 1
1 3 2 1
2 4 5 1
3 5 11 1
1 6 50 1
1 10000
1 3000
1 700
1 100
1 1
100 1
```

```output3
1
9003
14606
16510
16576
```

この入力中の鉄道網は以下のようなものです。

![図](https://img.atcoder.jp/ghi/c61c66a7977129c9ef86c6770b37acba.png)

以下のように行動することで、 都市 $1$ から都市 $6$ へ $16576$ 分で移動できます。

- $1$ 番目の鉄道路線を使って、都市 $1$ から都市 $2$ へ移動する。(所要時間: $1$ 分)
- 都市 $2$ の両替所で、金貨 $3$ 枚を銀貨 $3$ 枚と交換する。(所要時間: $9000$ 分)
- $1$ 番目の鉄道路線を使って、都市 $2$ から都市 $1$ へ移動する。(所要時間: $1$ 分)
- $2$ 番目の鉄道路線を使って、都市 $1$ から都市 $3$ へ移動する。(所要時間: $1$ 分)
- 都市 $3$ の両替所で、金貨 $8$ 枚を銀貨 $8$ 枚と交換する。(所要時間: $5600$ 分)
- $2$ 番目の鉄道路線を使って、都市 $3$ から都市 $1$ へ移動する。(所要時間: $1$ 分)
- $1$ 番目の鉄道路線を使って、都市 $1$ から都市 $2$ へ移動する。(所要時間: $1$ 分)
- $3$ 番目の鉄道路線を使って、都市 $2$ から都市 $4$ へ移動する。(所要時間: $1$ 分)
- 都市 $4$ の両替所で、金貨 $19$ 枚を銀貨 $19$ 枚と交換する。(所要時間: $1900$ 分)
- $3$ 番目の鉄道路線を使って、都市 $4$ から都市 $2$ へ移動する。(所要時間: $1$ 分)
- $1$ 番目の鉄道路線を使って、都市 $2$ から都市 $1$ へ移動する。(所要時間: $1$ 分)
- $2$ 番目の鉄道路線を使って、都市 $1$ から都市 $3$ へ移動する。(所要時間: $1$ 分)
- $4$ 番目の鉄道路線を使って、都市 $3$ から都市 $5$ へ移動する。(所要時間: $1$ 分)
- 都市 $5$ の両替所で、金貨 $63$ 枚を銀貨 $63$ 枚と交換する。(所要時間: $63$ 分)
- $4$ 番目の鉄道路線を使って、都市 $5$ から都市 $3$ へ移動する。(所要時間: $1$ 分)
- $2$ 番目の鉄道路線を使って、都市 $3$ から都市 $1$ へ移動する。(所要時間: $1$ 分)
- $5$ 番目の鉄道路線を使って、都市 $1$ から都市 $6$ へ移動する。(所要時間: $1$ 分)

```input4
4 6 1000000000
1 2 50 1
1 3 50 5
1 4 50 7
2 3 50 2
2 4 50 4
3 4 50 3
10 2
4 4
5 5
7 7
```

```output4
1
3
5
```

この入力中の鉄道網は以下のようなものです。

![図](https://img.atcoder.jp/ghi/bfbde2d55baea1e0487f80a62ef9b4ab.png)

```input5
2 1 0
1 2 1 1
1 1000000000
1 1
```

```output5
1000000001
```

この入力中の鉄道網は以下のようなものです。

![図](https://img.atcoder.jp/ghi/16b8d5c94640ed5b38c0863716196890.png)

以下のように行動することで、 都市 $1$ から都市 $2$ へ $1000000001$ 分で移動できます。

- 都市 $1$ の両替所で、金貨 $1$ 枚を銀貨 $1$ 枚と交換する。(所要時間: $1000000000$ 分)
- $1$ 番目の鉄道路線を使って、都市 $1$ から都市 $2$ へ移動する。(所要時間: $1$ 分)