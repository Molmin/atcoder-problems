配点 : $300$ 点

## 問題文

$\sqrt{a} + \sqrt{b} &lt; \sqrt{c}$ ですか？

## 制約

- $1 \leq a, b, c \leq 10^9$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $a \ b \ c$

## 出力

$\sqrt{a} + \sqrt{b} &lt; \sqrt{c}$ ならば `Yes`、そうでないならば `No` と出力せよ。

```input1
2 3 9
```

```output1
No
```

$\sqrt{2} + \sqrt{3} &lt; \sqrt{9}$ ではありません。

```input2
2 3 10
```

```output2
Yes
```

$\sqrt{2} + \sqrt{3} &lt; \sqrt{10}$ です。