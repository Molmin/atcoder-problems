配点 : $100$ 点

## 問題文

文字列 $s$ および $t$ が与えられます。
$s$ の部分列かつ $t$ の部分列であるような文字列のうち、最長のものをひとつ求めてください。

## 注釈

文字列 $x$ の*部分列*とは、$x$ から $0$ 個以上の文字を取り除いた後、残りの文字を元の順序で連結して得られる文字列のことです。

## 制約

- $s$ および $t$ は英小文字からなる文字列である。
- $1 \leq |s|, |t| \leq 3000$

## 入力

入力は以下の形式で標準入力から与えられる。

> $s$
> 
> $t$

## 出力

$s$ の部分列かつ $t$ の部分列であるような文字列のうち、最長のものをひとつ出力せよ。
答えが複数ある場合、どれを出力してもよい。

```input1
axyb
abyxb
```

```output1
axb
```

答えは `axb` または `ayb` です。
どちらを出力しても正解となります。 

```input2
aa
xayaz
```

```output2
aa
```

```input3
a
z
```

```output3

```

答えは `` (空文字列) です。

```input4
abracadabra
avadakedavra
```

```output4
aaadara
```