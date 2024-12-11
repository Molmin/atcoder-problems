配点 : $200$ 点

## 問題文

整数 $B$ が与えられます。<br>
$A^A = B$ であるような正の整数 $A$ が存在するならばその値を、存在しないならば `-1` を出力してください。  

## 制約

- $1 \leq B \leq 10^{18}$
- $B$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $B$

## 出力

$A^A = B$ であるような正の整数 $A$ が存在するならばその値を、存在しないならば `-1` を出力せよ。<br>
$A^A = B$ を満たす正の整数 $A$ が複数ある場合は、どれを出力しても正解とみなされる。

```input1
27
```

```output1
3
```

$3^3 = 27$ なので $3$ を出力します。

```input2
100
```

```output2
-1
```

$A^A = B$ を満たす $A$ は存在しません。

```input3
10000000000
```

```output3
10
```