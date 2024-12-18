配点: $200$ 点

## 問題文

高橋君はタップダンスをすることにしました。タップダンスの動きは文字列 $S$ で表され、$S$ の各文字は `L`, `R`, `U`, `D` のいずれかです。各文字は足を置く位置を表しており、$1$ 文字目から順番に踏んでいきます。

$S$ が以下の $2$ 条件を満たすとき、またその時に限り、$S$ を「踏みやすい」文字列といいます。

- 奇数文字目がすべて `R`, `U`, `D` のいずれか。
- 偶数文字目がすべて `L`, `U`, `D` のいずれか。

$S$ が「踏みやすい」文字列なら `Yes` を、そうでなければ `No` を出力してください。

## 制約

- $S$ は長さ $1$ 以上 $100$ 以下の文字列
- $S$ の各文字は `L`, `R`, `U`, `D` のいずれか

## 入力

入力は以下の形式で標準入力から与えられます。

> $S$

## 出力

$S$ が「踏みやすい」文字列なら `Yes` を、そうでなければ `No` を出力してください。

```input1
RUDLUDR
```

```output1
Yes
```

$1, 3, 5, 7$ 文字目は `R`, `U`, `D` のいずれかです。

$2, 4, 6$ 文字目は `L`, `U`, `D` のいずれかです。

したがって、この $S$ は「踏みやすい」文字列です。

```input2
DULL
```

```output2
No
```

$3$ 文字目が `R`, `U`, `D` のいずれでもないので、この $S$ は「踏みやすい」文字列ではありません。

```input3
UUUUUUUUUUUUUUU
```

```output3
Yes
```

```input4
ULURU
```

```output4
No
```

```input5
RDULULDURURLRDULRLR
```

```output5
Yes
```