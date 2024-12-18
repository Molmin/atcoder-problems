配点 : $100$ 点

## 問題文

ある学校には、$N$ 人の生徒がいます。

生徒たちをいくつかのグループに分け、グループごとにあるテーマについて話し合ってもらうこととなりました。

あなたは、$2$ 人以下のグループだと効果的な話し合いが出来ないと考えており、なるだけ多くのグループを $3$ 人以上にしたいです。

生徒たちを上手く分けて、$3$ 人以上のグループの数を最大化してください。

## 制約

- $1 \leq N \leq 1000$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

$3$ 人以上のグループを最大で $x$ 個作れるとき、$x$ を出力せよ。

```input1
8
```

```output1
2
```

例えば、$3$ 人のグループと $5$ 人のグループに分けるとよいです。

```input2
2
```

```output2
0
```

どのように生徒たちを分けても $3$ 人以上のグループを作れない場合もあります。

```input3
9
```

```output3
3
```