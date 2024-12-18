配点 : $600$ 点

## 問題文

以下のいずれかの条件を満たす文字列を**括弧列**と定義します。

1. 空文字列
2. ある括弧列 $A$ が存在して、`(`, $A$, `)` をこの順に連結した文字列
3. ある空でない括弧列 $A$, $B$ が存在して、$A$, $B$ をこの順に連結した文字列

$N$ 個の文字列 $S_i$ が与えられます。$S_i$ 全てを好きな順序で連結するとき、括弧列を構成することはできますか。

## 制約

- $1 \leq N \leq 10^6$
- $S_i$ の文字列長の合計は $10^6$ 以下
- $S_i$ は `(`, `)` のみからなる空でない文字列

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

$S_i$ を任意の順序で連結するとき、括弧列を構成できるなら `Yes`、できないなら `No` を出力せよ。

```input1
2
)
(()
```

```output1
Yes
```

`(()`, `)` の順に連結すると括弧列になります。

```input2
2
)(
()
```

```output2
No
```

```input3
4
((()))
((((((
))))))
()()()
```

```output3
Yes
```

```input4
3
(((
)
)
```

```output4
No
```