配点 : $100$ 点

## 問題文

`0` と `1` からなる長さ $16$ の文字列 $S$ が与えられます。

$2$ 以上 $16$ 以下のすべての偶数 $i$ について $S$ の $i$ 文字目が `0` ならば `Yes` を、
そうでないならば `No` を出力してください。 

## 制約

- $S$ は `0` と `1` からなる長さ $16$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

$2$ 以上 $16$ 以下のすべての偶数 $i$ について $S$ の $i$ 文字目が `0` ならば `Yes` を、
そうでないならば `No` を出力せよ。

```input1
1001000000001010
```

```output1
No
```

$S=$ `1001000000001010` の $4$ 文字目が `1` であるため、`No` を出力します。 

```input2
1010100000101000
```

```output2
Yes
```

$S=$ `1010100000101000` の偶数番目の文字はすべて `0` であるため、`Yes` を出力します。

```input3
1111111111111111
```

```output3
No
```

$S$ の偶数文字目はすべて `1` となっています。
特に「すべて `0` 」ではないため、`No` を出力します。