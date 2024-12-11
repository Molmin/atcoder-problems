配点 : $100$ 点

## 問題文

高橋君は、毎日 $S$ 時 $0$ 分に部屋の電気をつけ、毎日 $T$ 時 $0$ 分に消します。<br>
電気をつけている間に日付が変わることもあります。

$X$ 時 $30$ 分に部屋の電気がついているかどうか判定してください。

## 制約

- $0 \leq S, T, X \leq 23$
- $S \neq T$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$ $T$ $X$

## 出力

$X$ 時 $30$ 分に部屋の電気がついているならば `Yes` と、そうでなければ `No` と出力せよ。

```input1
7 20 12
```

```output1
Yes
```

部屋の電気がついているのは $7$ 時 $0$ 分から $20$ 時 $0$ 分までの間です。$12$ 時 $30$ 分には電気がついているので、`Yes` と出力します。

```input2
20 7 12
```

```output2
No
```

部屋の電気がついているのは $0$ 時 $0$ 分から $7$ 時 $0$ 分までの間と、$20$ 時 $0$ 分から（次の日の）$0$ 時 $0$ 分までの間です。
$12$ 時 $30$ 分には電気がついていないので、`No` と出力します。

```input3
23 0 23
```

```output3
Yes
```