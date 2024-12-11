配点 : $300$ 点

## 問題文

くじ引きを $N$ 回行い、$i$ 回目には種類が文字列 $S_i$ で表される景品を手に入れました。

何種類の景品を手に入れましたか？

## 制約

- $1 \leq N \leq 2\times 10^5$
- $S_i$ は英小文字のみからなり、長さは $1$ 以上 $10$ 以下

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $:$
> 
> $S_N$

## 出力

何種類の景品を手に入れたか出力せよ。

```input1
3
apple
orange
apple
```

```output1
2
```

`apple` と `orange` の $2$ 種類の景品を手に入れました。

```input2
5
grape
grape
grape
grape
grape
```

```output2
1
```

```input3
4
aaaa
a
aaa
aa
```

```output3
4
```