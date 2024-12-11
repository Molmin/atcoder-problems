配点 : $400$ 点

## 問題文

$1,2,..,N$ からなる順列 $p_1,p_2,..,p_N$ が与えられます。
次の操作を何回か ($0$回でもよい) 行うことが出来ます。

操作: 順列で**隣り合う**二つの数を選んでスワップする。

何回か操作を行って、任意の $1 \leq i \leq N$ に対して $p_i \neq i$ となるようにしたいです。
必要な操作の最小回数を求めてください。

## 制約

- $2 \leq N \leq 10^5$
- $p_1,p_2,..,p_N$ は $1,2,..,N$ の順列である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $p_1$ $p_2$ .. $p_N$

## 出力

必要な操作の最小回数を出力せよ。

```input1
5
1 4 3 5 2
```

```output1
2
```

$1$ と $4$ を入れ替え、その後 $1$ と $3$ を入れ替えることで $p$ は $4,3,1,5,2$ となり、これは条件を満たします。
これが最小回数なので、答えは $2$ となります。

```input2
2
1 2
```

```output2
1
```

$1$ と $2$ を入れ替えれば条件を満たします。

```input3
2
2 1
```

```output3
0
```

初めから条件を満たしています。

```input4
9
1 2 4 9 5 8 7 3 6
```

```output4
3
```