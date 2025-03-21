配点 : $300$ 点

## 問題文

on と off の状態を持つ $N$ 個の スイッチと、$M$ 個の電球があります。スイッチには $1$ から $N$ の、電球には $1$ から $M$ の番号がついています。

電球 $i$ は $k_i$ 個のスイッチに繋がっており、スイッチ $s_{i1}, s_{i2}, ..., s_{ik_i}$ のうち on になっているスイッチの個数を $2$ で割った余りが $p_i$ に等しい時に点灯します。

全ての電球が点灯するようなスイッチの on/off の状態の組み合わせは何通りあるでしょうか。

## 制約

- $1 \leq N, M \leq 10$
- $1 \leq k_i \leq N$
- $1 \leq s_{ij} \leq N$
- $s_{ia} \neq s_{ib} (a \neq b)$
- $p_i$ は $0$ または $1$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $k_1$ $s_{11}$ $s_{12}$ $...$ $s_{1k_1}$
> 
> $:$
> 
> $k_M$ $s_{M1}$ $s_{M2}$ $...$ $s_{Mk_M}$
> 
> $p_1$ $p_2$ $...$ $p_M$

## 出力

全ての電球が点灯するようなスイッチの on/off の状態の組み合わせの個数を出力せよ。

```input1
2 2
2 1 2
1 2
0 1
```

```output1
1
```

- 電球 $1$ は、次のスイッチのうち偶数個が on の時に点灯します: スイッチ $1, 2$
- 電球 $2$ は、次のスイッチのうち奇数個が on の時に点灯します: スイッチ $2$

(スイッチ $1$、スイッチ $2$) の状態としては (on,on),(on,off),(off,on),(off,off) が考えられますが、このうち (on,on) のみが条件を満たすので、$1$ を出力してください。

```input2
2 3
2 1 2
1 1
1 2
0 0 1
```

```output2
0
```

- 電球 $1$ は、次のスイッチのうち偶数個が on の時に点灯します: スイッチ $1, 2$
- 電球 $2$ は、次のスイッチのうち偶数個が on の時に点灯します: スイッチ $1$
- 電球 $3$ は、次のスイッチのうち奇数個が on の時に点灯します: スイッチ $2$

電球 $2$ を点灯させるためには スイッチ $1$ が off, 電球 $3$ を点灯させるためにはスイッチ $2$ が on である必要がありますが、この時電球 $1$ は点灯しません。

よって、全ての電球が点灯するようなスイッチの on/off の状態の組み合わせは存在しないので、$0$ を出力してください。

```input3
5 2
3 1 2 5
2 2 3
1 0
```

```output3
8
```