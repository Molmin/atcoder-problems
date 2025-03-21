配点 : $400$ 点

## 問題文

文字列 $S$ があり、初め $S=$ `1` です。<br>
以下の形式のクエリが $Q$ 個与えられるので順に処理してください。

- `1 x` : $S$ の末尾に数字 $x$ を追加する
- `2` : $S$ の先頭の数字を削除する
- `3` : $S$ を十進数表記の数とみなした値を $998244353$ で割った余りを出力する

## 制約

- $1 \leq Q \leq 6 \times 10^5$
- $1$ 番目の形式のクエリについて、$x \in \{1,2,3,4,5,6,7,8,9\}$
- $2$ 番目の形式のクエリは $S$ が $2$ 文字以上の時にのみ与えられる
- $3$ 番目の形式のクエリが $1$ 個以上存在する

## 入力

入力は以下の形式で標準入力から与えられる。

> $Q$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

ただし $\mathrm{query}_i$ は $i$ 番目のクエリを表し、以下のいずれかの形式である。

> $1$ $x$
> $2$
> $3$

## 出力

$3$ 番目の形式のクエリの個数を $q$ として、$q$ 行出力せよ。$i$ $(1 \leq i \leq q)$ 行目には $i$ 番目の $3$ 番目の形式のクエリに対する出力をせよ。

```input1
3
3
1 2
3
```

```output1
1
12
```

$1$ 番目のクエリにおいて、$S$ は `1` なので ( $1$ を $998244353$ で割った余りに等しい) $1$ を出力します。<br>
$2$ 番目のクエリにおいて、$S$ は `12` になります。<br>
$3$ 番目のクエリにおいて、$S$ は `12` なので ( $12$ を $998244353$ で割った余りに等しい) $12$ を出力します。  

```input2
3
1 5
2
3
```

```output2
5
```

```input3
11
1 9
1 9
1 8
1 2
1 4
1 4
1 3
1 5
1 3
2
3
```

```output3
0
```

出力されるべき値は $998244353$ で割った余りであることに注意してください。