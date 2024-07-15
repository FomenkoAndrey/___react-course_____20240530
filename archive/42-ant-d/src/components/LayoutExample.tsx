import { Layout } from 'antd'
import { CSSProperties, FC } from 'react'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#ffffff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff'
}

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 240,
  lineHeight: '240px',
  color: '#ffffff',
  backgroundColor: '#0958d9'
}

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '240px',
  color: '#ffffff',
  backgroundColor: '#1677ff'
}

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#4096ff'
}

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden'
}

const LayoutExample: FC = () => {
  const screens = useBreakpoint()

  console.log('screens', screens)
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout style={{ flex: 1, flexDirection: screens.sm ? 'row' : 'column-reverse' }}>
        <Sider width={screens.sm ? '200px' : '100%'} style={siderStyle}>
          Sider
        </Sider>
        <Content style={{ ...contentStyle, width: '100%' }}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  )
}

export default LayoutExample
