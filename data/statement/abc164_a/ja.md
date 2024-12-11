配点 : $100$ 点

## 問題文

羊が $S$ 匹、狼が $W$ 匹います。

狼の数が羊の数以上のとき、羊は狼に襲われてしまいます。

羊が狼に襲われるなら `unsafe`、襲われないなら `safe` を出力してください。

## 制約

- $1 \leq S \leq 100$
- $1 \leq W \leq 100$

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$ $W$

## 出力

羊が狼に襲われるなら `unsafe`、襲われないなら `safe` を出力せよ。

```input1
4 5
```

```output1
unsafe
```

羊が $4$ 匹、狼が $5$ 匹います。狼の数が羊の数以上なので、羊は狼に襲われてしまいます。

```input2
100 2
```

```output2
safe
```

多勢に無勢です。

```input3
10 10
```

```output3
unsafe
```