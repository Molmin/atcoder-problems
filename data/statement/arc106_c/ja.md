配点 : $500$ 点

## 問題文

$2$ つの区間 $[L_1:R_1], [L_2:R_2]$ について, $L_1 \leq R_2$ かつ $L_2 \leq R_1$ であるとき, この $2$ つの区間が*交わる*と定義します。

以下の問題 $P$ を考えます。

```plain
入力: $N$ 個の区間 $[L_1: R_1], \cdots, [L_N:R_N]$
      $L_1, L_2, \cdots, L_N, R_1, R_2, \cdots, R_N$は全て異なる。
出力: どの $2$ つの区間も交わらないように選べる区間の最大数
```

高橋君は、以下のように動作するプログラムを実装しました。

```plain
$R_i$ の値が昇順となるように, 入力された区間を $[L_{p_1}:R_{p_1}], [L_{p_2}:R_{p_2}], \cdots , [L_{p_N}:R_{p_N}]$ と並び替える。
$i = 1, 2, \cdots , N$ について、以下を行う。
  これまでに選んだどの区間とも交わらないならば、 $[L_{p_i}:R_{p_i}]$ を選ぶ。
選んだ区間の数を出力する。
```

一方、青木君は、以下のように動作するプログラムを実装しました。

```plain
$L_i$ の値が昇順となるように, 入力された区間を $[L_{p_1}:R_{p_1}], [L_{p_2}:R_{p_2}], \cdots , [L_{p_N}:R_{p_N}]$ と並び替える。
$i = 1, 2, \cdots , N$ について、以下を行う。
  これまでに選んだどの区間とも交わらないならば、 $[L_{p_i}:R_{p_i}]$ を選ぶ。
選んだ区間の数を出力する。
```

整数 $N, M$が与えられます。 $N$ 個の区間から成る問題 $P$ の入力であって、

$$
(高橋君のプログラムが出力する値) - (青木君のプログラムが出力する値) = M
$$

となるものを構築してください。

## 制約

- 入力は全て整数
- $1 \leq N \leq 2 \times 10^5$
- $-N \leq M \leq N$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$

## 出力

条件を満たす $N$ 個の区間が存在しない場合は `-1` と出力せよ。

存在する場合は、 以下のように $N$ 行出力せよ。

> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
>   $\vdots$
> 
> $L_N$ $R_N$

ただし, $[L_1:R_1], \cdots, [L_N:R_N]$は以下の条件を満たさなければならない。

- $1 \leq L_i &lt; R_i \leq 10^9$
- $L_i \neq L_j$ ($i \neq j$)
- $R_i \neq R_j$ ($i \neq j$)
- $L_i \neq R_j$
- $L_1, \cdots , L_N , R_1, \cdots , R_N$ は整数 (21:46 追記)

答えが複数存在する場合は、どれを出力しても構わない。

出力の最後には必ず改行を行うこと。

```input1
5 1
```

```output1
1 10
8 12
13 20
11 14
2 4
```

$5$ つの区間を順に区間 $1$ 、区間 $2$ 、$\cdots$ 、区間 $5$ と名付けます。

高橋君のプログラムは以下のように動作します。

```output1
区間を区間 $5$ 、区間 $1$ 、区間 $2$ 、区間 $4$ 、区間 $3$ と並び替えます。
区間 $5$ を選びます。
区間 $1$ は選びません。(区間 $5$ と交わっている為)
区間 $2$ を選びます。
区間 $4$ は選びません。 (区間 $2$ と交わっている為)
区間 $3$ を選びます。
```

以上より、高橋君のプログラムが出力する値は $3$ となります。

青木君のプログラムは以下のように動作します。

```output1
区間を区間 $1$ 、区間 $5$ 、区間 $2$ 、区間 $4$ 、区間 $3$ と並び替えます。
区間 $1$ を選びます。
区間 $5$ は選びません。(区間 $1$ と交わっている為)
区間 $2$ は選びません。 (区間 $1$ と交わっている為)
区間 $4$ を選びます。
区間 $3$ は選びません。 (区間 $4$ と交わっている為)
```

以上より、青木君のプログラムが出力する値は $2$ となります。

このとき、 $3 - 2 = 1 \left(= M \right)$ であり、この $5$ つの区間は条件を満たします。

```input2
10 -10
```

```output2
-1
```