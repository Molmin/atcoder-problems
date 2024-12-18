配点 : $200$ 点

## 問題文

英小文字からなる $3$ つの文字列 $S_1, S_2, S_3$ と、`1`、`2`、`3` のみからなる文字列 $T$ が与えられます。

$T$ の各文字に対応する文字列を連結してできる文字列を出力してください。より厳密には、以下の指示にしたがって文字列を出力してください。

- $1 \leq i \leq |T|$ を満たす整数 $i$ に対し、文字列 $s_i$ を次のように定める。-   - $T$ の $i$ 文字目が `1` のとき、$S_1$
-   - $T$ の $i$ 文字目が `2` のとき、$S_2$
-   - $T$ の $i$ 文字目が `3` のとき、$S_3$
- $s_1, s_2, \dots, s_{|T|}$ をこの順に連結してできる文字列を出力する。

## 制約

- $1 \leq |S_1|, |S_2|, |S_3| \leq 10$
- $1 \leq |T| \leq 1000$
- $S_1, S_2, S_3$ は英小文字からなる。
- $T$ は `1`、`2`、`3` のみからなる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $S_1$
> 
> $S_2$
> 
> $S_3$
> 
> $T$

## 出力

答えを出力せよ。

```input1
mari
to
zzo
1321
```

```output1
marizzotomari
```

$s_1 =$ `mari`, $s_2 =$ `zzo`, $s_3 =$ `to`, $s_4 =$ `mari` であるので、これらを連結してできる文字列である `marizzotomari` を出力します。

```input2
abra
cad
abra
123
```

```output2
abracadabra
```

```input3
a
b
c
1
```

```output3
a
```