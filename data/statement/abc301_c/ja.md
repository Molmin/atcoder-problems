配点 : $300$ 点

## 問題文

AtCoder社ではカードを使った $1$ 人ゲームが流行っています。<br>
ゲームで使う各カードには、英小文字 $1$ 文字または `@` の文字が書かれており、いずれのカードも十分多く存在します。<br>
ゲームは以下の手順で行います。

1. カードを同じ枚数ずつ $2$ 列に並べる。
2. `@` のカードを、それぞれ `a`, `t`, `c`, `o`, `d`, `e`, `r` のいずれかのカードと置き換える。
3. $2$ つの列が一致していれば勝ち。そうでなければ負け。

このゲームに勝ちたいあなたは、次のようなイカサマをすることにしました。

- 手順 $1$ 以降の好きなタイミングで、列内のカードを自由に並び替えてよい。

手順 $1$ で並べられた $2$ つの列を表す $2$ つの文字列 $S,T$ が与えられるので、イカサマをしてもよいときゲームに勝てるか判定してください。

## 制約

- $S,T$ は英小文字と `@` からなる
- $S,T$ の長さは等しく $1$ 以上 $2\times 10^5$ 以下

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$
> 
> $T$

## 出力

イカサマをしてもよいとき、ゲームに勝てるなら `Yes`、勝てないなら `No` と出力せよ。 

```input1
ch@ku@ai
choku@@i
```

```output1
Yes
```

`@` をうまく置き換えることによって、両方とも `chokudai` と一致させることが可能です。

```input2
ch@kud@i
akidu@ho
```

```output2
Yes
```

イカサマをし、`@` をうまく置き換えることによって、両方とも `chokudai` と一致させることが可能です。

```input3
aoki
@ok@
```

```output3
No
```

イカサマをしても勝つことはできません。

```input4
aa
bb
```

```output4
No
```